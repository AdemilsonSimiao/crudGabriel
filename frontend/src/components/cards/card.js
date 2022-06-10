import React from 'react';
import FormDialog from '../dialog/dialog';
import './card.css';


export default function Card(props){
    
    const [open, setOpen] = React.useState(false);

    const handleClickCard = () =>{
        setOpen(true);
    }

    return (
        <>
            <FormDialog 
                open={open} 
                setOpen={setOpen} 
                name={props.name} 
                price={props.price} 
                category={props.category}
                listCard={props.listCard}
                setListCard={props.setListCard}
                id={props.id}
            />
            <div className='card--container'>
                <table className='table'>
                    <tbody>
                        <tr className='tr' onClick={()=>{handleClickCard()}}>
                            <td className='card--title'>{props.name}</td>
                            <td className='card--price'>R$ {props.price}</td>
                            <td className='card--category'>{props.category}</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </>
    )
}