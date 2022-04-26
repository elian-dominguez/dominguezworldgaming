import React from 'react'
import { BsTrash } from 'react-icons/bs';
import { Link } from 'react-router-dom';
import { Button, Divider, FlexboxGrid } from 'rsuite';
import { useCartContext } from '../../context/CartContext';

export default function CartList() {

const { cartList, clearCartList, eliminateFromCartList, itemsPrice } = useCartContext()

return (
    <div className='cartList'>
        {
        cartList.length === 0
            ?
            <div className='buy'>
                El carrito esta vacío
                <br />
                <br />
                <Link to='/' >
                    <Button appearance="primary">¡Comprar ya!</Button>
                </Link>
            </div>
            :
            <>
                <div className='panelList'>
                    <FlexboxGrid className='itemTitles'>
                        <FlexboxGrid.Item colspan={5}>ID</FlexboxGrid.Item>
                        <FlexboxGrid.Item colspan={5}>Nombre del juego</FlexboxGrid.Item>
                        <FlexboxGrid.Item colspan={5}>Cantidad</FlexboxGrid.Item>
                        <FlexboxGrid.Item colspan={5}>Precio</FlexboxGrid.Item>
                        <FlexboxGrid.Item colspan={4}>Eliminar</FlexboxGrid.Item>
                    </FlexboxGrid>
                    <Divider />
                    <FlexboxGrid className='mapList'>
                        {cartList.map(game =>
                            <div key={game.id} className='listContainer'>
                                <FlexboxGrid.Item className='itemList' colspan={5}>{game.id}</FlexboxGrid.Item>
                                <FlexboxGrid.Item className='itemList' colspan={5}>{game.title}</FlexboxGrid.Item>
                                <FlexboxGrid.Item className='itemList' colspan={5}>{game.quantity}</FlexboxGrid.Item>
                                <FlexboxGrid.Item className='itemList' colspan={5}>{game.price}</FlexboxGrid.Item>
                                <FlexboxGrid.Item className='itemList' colspan={4}> <BsTrash onClick={() => eliminateFromCartList(game.id)} size={20} cursor={'pointer'} /> </FlexboxGrid.Item>
                            </div>
                        )}
                    </FlexboxGrid>
                    <Divider />
                    <FlexboxGrid className='totalList' >
                        {cartList.length !== 0 ?
                            <>
                                <FlexboxGrid.Item colSpan={6}><b>Precio total: </b></FlexboxGrid.Item>
                                <FlexboxGrid.Item className='total' colSpan={6}><b>${itemsPrice()}</b></FlexboxGrid.Item>
                            </>
                            : cartList}
                    </FlexboxGrid>
                    <Divider/>
                    <Button className='clearList' size='sm' onClick={clearCartList} appearance="primary" color='red'>Limpiar carrito</Button>
                </div>
            </>
        }
    </div>
    );
}
