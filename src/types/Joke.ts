export interface Joke
{
    error:boolean;
    category:string;
    type:string;
    setup:string;
    delivery:string;
    Flags: Flag;
    id:number;
    safe:boolean;
    lang:string;
}

export interface Flag
{
    nsfw:boolean;
    religious:boolean;
    political:boolean;
    racist:boolean;
    sexist:boolean;
    explicit:boolean;
}