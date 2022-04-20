export { default as CalendarWeek } from "./CalendarWeek";

export enum EditScopes {
    DELETE,
    EDIT,
}

export enum EventPublishState {
    DRAFT,
    PUBLIC,
}

export enum Rsvp {
    MAYBE,
    GOING,
    NOT_GOING,
}

export enum AttendanceOption {
    ONLINE,
    IN_PERSON,
    HYBRID
}

export interface CalendarEditor {
    id: string;
    scopes: EditScopes[];
}

export interface EventRsvp {
    rsvp: Rsvp;
    isPublic: boolean;
    attendee: string;
}

export interface SocialLinks {
    instagram?: string;
    website?: string;
    additional?: string[];
};

export interface EventParticipant {
    name: string;
    pronouns?: string;
    socialLinks: string[];
}

export interface CalendarEvent {
    title: string;
    coverImageUrl?: string;
    // Group/department/person who is organizing this event
    organizer?: string;
    // The account that created this event
    creator: string;
    // Additional people who are able to edit this event
    editors: CalendarEditor[];
    // Misc details about this event
    description?: string;
    publishState: EventPublishState;
    start: Date;
    end: Date;
    tzinfo: string;
    rsvpForLocation: boolean;
    attendanceOption: AttendanceOption;
    location?: string; // TODO (Dytrich): Location data using Google APIs?
    // If an event is online or streaming or link or something
    eventUrl?: string;
    // More info
    infoUrl?: string;
    rsvps: EventRsvp[];
    participants: EventParticipant[];
    tags: string[];
}

export interface CalendarEventFormFields {
    title: string;
    creator: string;
    description?: string;
    publishState: EventPublishState;
    start: Date;
    end: Date;
    tzinfo: string;
    rsvpForLocation: boolean;
    attendanceOption: AttendanceOption;
    location?: string;
    eventUrl?: string;
    infoUrl?: string;
}