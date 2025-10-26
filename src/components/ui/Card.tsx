import { useEffect } from "react";
import { ShareIcon } from "../../icons/shareicon";

interface CardProps {
    title: string;
    link: string;
    type: "twitter" | "youtube" | "github";
}

export function Card({ title, link, type }: CardProps) {
    // Load Twitter script when needed
    useEffect(() => {
        if (type === "twitter") {
            const script = document.createElement("script");
            script.src = "https://platform.twitter.com/widgets.js";
            script.async = true;
            document.body.appendChild(script);
            return () => {
                document.body.removeChild(script);
            };
        }
    }, [type]);

    // ✅ Helper that extracts YouTube video ID from many URL formats
    const getYouTubeVideoId = (url: string): string | null => {
        try {
            const ytUrl = new URL(url.startsWith("http") ? url : `https://${url}`);
            const hostname = ytUrl.hostname;

            // Normal watch URL
            if (hostname.includes("youtube.com")) {
                if (ytUrl.searchParams.has("v")) {
                    return ytUrl.searchParams.get("v");
                }
                // Handle /embed/VIDEO_ID or /shorts/VIDEO_ID
                const parts = ytUrl.pathname.split("/");
                const idx = parts.findIndex(p => ["embed", "shorts"].includes(p));
                if (idx !== -1 && parts[idx + 1]) return parts[idx + 1];
            }

            // Short link format: youtu.be/VIDEO_ID
            if (hostname === "youtu.be") {
                return ytUrl.pathname.split("/")[1] || null;
            }

            return null;
        } catch {
            return null;
        }
    };

    const getYouTubeEmbedUrl = (url: string): string | null => {
        const videoId = getYouTubeVideoId(url);
        return videoId ? `https://www.youtube.com/embed/${videoId}` : null;
    };

    // Rendering
    let content: JSX.Element | null = null;

    if (type === "youtube") {
        const embedUrl = getYouTubeEmbedUrl(link);
        content = embedUrl ? (
            <iframe
                className="w-full aspect-video rounded-md"
                src={embedUrl}
                title={title}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
            />
        ) : (
            <p className="text-gray-500">Invalid YouTube link</p>
        );
    } else if (type === "twitter") {
        const tweetUrl = link.replace("x.com", "twitter.com");
        content = (
            <blockquote className="twitter-tweet">
                <a href={tweetUrl}></a>
            </blockquote>
        );
    } else if (type === "github") {
        content = (
            <a
                href={link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 underline"
            >
                View on GitHub
            </a>
        );
    }

    return (
        <div className="p-4 bg-white rounded-md border border-gray-200 max-w-72 min-h-48 min-w-72">
            <div className="flex justify-between">
                <div className="flex items-center text-md">
                    <div className="text-gray-500 pr-2">
                        <ShareIcon />
                    </div>
                    {title}
                </div>

                <div className="flex items-center">
                    <div className="pr-2 text-gray-500">
                        <a href={link} target="_blank" rel="noopener noreferrer">
                            <ShareIcon />
                        </a>
                    </div>
                    <div className="text-gray-500">
                        <ShareIcon />
                    </div>
                </div>
            </div>

            <div className="pt-4">{content}</div>
        </div>
    );
}
