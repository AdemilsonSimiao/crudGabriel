import './thead.css';


export default function THead(){
    return(
        <div className='thead'>
            <h1>Lista dos Discos de Vinil</h1>
            <thead>
                <tr className='tr'>
                    <th className='card--nome'>Nome</th>
                    <th className='card--preco'>Preço</th>
                    <th className='card--categoria'>Categoria</th>
                </tr>
            </thead>
        </div>
    );
}