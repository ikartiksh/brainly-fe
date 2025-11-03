import { Logo } from "../icons/Logo";
import { TwitterIcon } from "../icons/TwitterIcon";
import { YoutubeIcon } from "../icons/YoutubeIcon";
import { GithubIcon } from "../icons/GithubIcon";
import { SidebarItem } from "./SidebarItem";

export function Sidebar() {
    return <div className="h-screen bg-black border-r w-72 fixed left-0 top-0 pl-6">
        <div className="flex text-2xl pt-8 items-center">
            <div className="pr-2 text-blue-600">
                <Logo /> 
            </div>
            Second Brain
        </div>
        <div className="pt-8 pl-4">
            <SidebarItem text="Twitter" icon={<TwitterIcon />} />
            <SidebarItem text="YouTube" icon={<YoutubeIcon />} />
            <SidebarItem text="GitHub" icon={<GithubIcon />} />
        </div>
    </div>
}