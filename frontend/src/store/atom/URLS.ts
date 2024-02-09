import { atom } from "recoil";

export const URLSatom = atom({
    key: "URLSatom",
    default: {
        shortenedURL: "",
        completeURL: "",
    },
});

export const flipAtom = atom({
    key: 'flipAtom',
    default: false
})
