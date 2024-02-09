import { atom } from "recoil";

export const URLSatom = atom({
    key: "URLSatom",
    default: {
        shortenedURL: "",
        completeURL: "",
    },
});
