"use strict";

import { Error as Error_ } from "./cast/dataClasses";
import { Media } from "./cast/media";

export type SuccessCallback = () => void;
export type ErrorCallback = (err: Error_) => void;

export type MediaListener = (media: Media) => void;
export type MessageListener = (namespace: string, message: string) => void;
export type UpdateListener = (isAlive: boolean) => void;
export type LoadSuccessCallback = (media: Media) => void;
