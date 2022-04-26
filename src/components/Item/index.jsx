import React from 'react'
import Button from 'rsuite/Button';
import { Link } from 'react-router-dom'
import { Divider, Panel } from 'rsuite'

function Item({id, title, image, price}) {
    return (
        <div className='container' >
            <Panel className='panelContainer' shaded bordered bodyFill style={{display: 'inline-block', width: 240 }}>
            <img src={image} height="240" width="240px" />
            <Divider className='divider' />
                <Panel className='panel' >
                    <p className='title'>
                        {title}
                    </p>
                    <Divider />
                    <p className='price'>
                        <small>
                            PRECIO: ${price}
                        </small>
                    </p>
                    <Divider />
                    <p>
                        <small>
                            <Link to={`/detail/${id}`} >
                                <Button className='detailButton' color="orange" appearance="primary">DETALLE</Button>
                            </Link>
                        </small>
                    </p>
                </Panel>
            </Panel>
        </div>
    )
}

export default Item