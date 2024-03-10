import { captureRejectionSymbol } from "events";




function CreateCar(manufacturer: string, model: string, ... properties: [string,any][]):any{
    const Car: any = {
         manufacturer,
        model,
    };
}
for (const [key, value] of properties){
    Car [key] = value
}
return Car;

//Example usaage
const MyCar: string =CreateCar(' toyota',' ferrari',["color","red",["optional feature","sunroof"]]);

