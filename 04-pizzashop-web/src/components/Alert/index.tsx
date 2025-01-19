import {Card} from "../ui/card.tsx";

export function Alert(){
    return(
        <Card className="p-5">
            <hr className="border border-dashed"/>
            <div className=" flex justify-center items-center p-14">
              <h1>Não dados nesse periodo</h1>
            </div>
            <hr className="border border-dashed"/>
        </Card>
    )
}