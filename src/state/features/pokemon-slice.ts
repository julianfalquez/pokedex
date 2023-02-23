import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { pokemonInterface } from "../../interfaces/pokemon";

interface PokemonState {
  selectedPokemon: pokemonInterface | undefined;
  pokemonList: any | undefined;
  pokemonListIsLoading: "pending" | "idle";
  error: any;
}

const initialState: PokemonState = {
  pokemonList: undefined,
  selectedPokemon: undefined,
  pokemonListIsLoading: "idle",
  error: null,
};

const pokemonSlice = createSlice({
  name: "pokemon",
  initialState,
  reducers: {
    setSelectedPokemon(state, action) {
      state.selectedPokemon = action.payload;
    },
    setPokemonList(state, action) {
      state.pokemonList = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchPokemonList.pending, (state) => {
        if (state.pokemonListIsLoading === "idle") {
          state.pokemonListIsLoading = "pending";
        }
      })
      .addCase(fetchPokemonList.fulfilled, (state, action) => {
        if (state.pokemonListIsLoading === "pending") {
          state.pokemonListIsLoading = "idle";
          state.pokemonList=action.payload;
        }
      })
      .addCase(fetchPokemonList.rejected, (state, action) => {
        if (state.pokemonListIsLoading === "pending") {
          state.pokemonListIsLoading = "idle";
          state.error = action.error;
        }
      });
  },
});

export const fetchPokemonList = createAsyncThunk(
  "pokemon/fetchPokemonList",
  async ( getState, dispatch ) => {
    const response = await fetch(
      process.env.REACT_APP_POKEMON_API + "/pokemon?limit=500&offset=0"
    );
    const data = await response.json()
    return data.results
  }
);

export const { setSelectedPokemon } = pokemonSlice.actions;
export default pokemonSlice.reducer;
