import axios from "axios";
import {useEffect, useRef, useState} from "react";
import {ContentType} from "../../hooks/useContent";
import {Button} from "../ui/Button";
import {Input} from "../ui/Input";
import {CrossIcon} from "../icons/CrossIcon";

export function useContent() {
    const [contents, setContents] = useState([]);

    function refresh() {
        axios.get(`${process.env.BACKEND_URL}/api/V1/content`, {
            headers: {
                "Authorization": `${localStorage.getItem("token")}`
            }
        })
        .then(response => {
            setContents(response.data.content);
        })
    }

    useEffect(() => {
        refresh()
        let interval = setInterval(() => {
            refresh()
        }, 10 * 600);
        return () => clearInterval(interval);
    }, [])
    return {contents, refresh};
}