import { patchState, signalState, signalStore, withMethods, withState } from "@ngrx/signals";
import { IContexto } from "../models/IContexto";

export interface IGlobalState {
    contexto: IContexto|null;
}


const globalState = signalState<IGlobalState>(
    {
        contexto: null
    }
);


export const globalStore = signalStore(
    {providedIn: 'root'},
    withState(globalState),
    withMethods(
        ({ contexto, ...store}) =>
            (
                {
                    establecerContexto(nuevoContexto: IContexto)
                    {
                        patchState(store, { contexto: nuevoContexto})
                    }

                }
            ) 
    )
);



