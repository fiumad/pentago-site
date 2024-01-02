import { writable } from "svelte/store";
export const GameState = writable({
    current_player: "White",
    turn: 0,
    state: [[0,0,0,0,0,0],[0,0,0,0,0,0],[0,0,0,0,0,0],[0,0,0,0,0,0],[0,0,0,0,0,0],[0,0,0,0,0,0]],
    direction: 0
});
