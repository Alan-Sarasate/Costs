import { BsTrash3Fill } from 'react-icons/bs'
import { CardWrapper, CardTitle, CardButton, NoBreak } from './ServiceCard.style'


export default function ServiceCard({Title, Cost, Description, removeFunction}){

    return(
        <CardWrapper>
            <CardTitle>{Title}</CardTitle>
            <NoBreak><span>Custo: </span>{Cost}</NoBreak>
            <NoBreak>{Description}</NoBreak>
            <NoBreak>
                <CardButton onClick={()=>removeFunction()}><BsTrash3Fill/>Excluir</CardButton>
            </NoBreak>
        </CardWrapper>
    )
}