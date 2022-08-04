import JobStatusNotifier from "./JobStatusNotifier";
import { AssociativeObject } from "../types/core";
interface NotifierObject {
    [key: string]: JobStatusNotifier;
}
declare class NotifierCollection {
    notifiers: NotifierObject;
    get(jobAlias: string, tags: AssociativeObject): JobStatusNotifier | null;
    push(jobAlias: string, tags: AssociativeObject, jobStatusNotifier: JobStatusNotifier): void;
    private _getKey;
}
export default NotifierCollection;
