import {imageLinks} from "./imageLinks.model";

export type VolumeInfoModel = {
    categories: Array<string>;
    authors: Array<string>;
    description: string;
    imageLinks: imageLinks;
    title: string
}
