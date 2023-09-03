import { CardButton, CardTitle, CardWrapper, NoBreak } from "./Card.styles";
import { BsPencil } from 'react-icons/bs'
import { BsTrash3Fill } from 'react-icons/bs'


export default function Card({Title, Budget, Category, removeFunction, editFunction}){

    function Color (category) {
        const colors = {
            Desenvolvimento: "#008000",
            Infra: "#FF0000",
            Design: "#0000FF",
            Planejamento: "#FFFF00"
        }

        return colors[category]
    }

    return(
        <CardWrapper>
            <CardTitle>{Title}</CardTitle>
            <NoBreak><span>Orçamento: </span>{Budget}</NoBreak>
            <NoBreak><div style={{backgroundColor: `${Color(Category)}`}}>a </div> {Category}</NoBreak>
            <NoBreak>
                <CardButton onClick={()=>editFunction()}><BsPencil/>Editar</CardButton>
                <CardButton onClick={()=>removeFunction()}><BsTrash3Fill/>Excluir</CardButton>
            </NoBreak>
        </CardWrapper>
    )
}