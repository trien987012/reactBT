import React, { Component } from 'react';
import FormProduct from './FormProduct';
import TableProduct from './TableProduct';

class ProductManagement extends Component {

    state = {
        arrProduct: [
            {id:'1', name:'product 1', price:'1000', description:'product 1 desc', img:'https://picsum.photos/200/200', productType:'mobile'},
            {id:'2', name:'product 2', price:'2000', description:'product 2 desc', img:'https://picsum.photos/200/200', productType:'mobile'}
        ],
        productEdit: {
            id:'',
            name:'',
            price:'',
            img:'',
            productType:'mobile',
            description:''
        }
    }

    editProduct = (prodEdit) =>{
        console.log(prodEdit);
        //setState this.state.productEdit
        this.setState({
            productEdit:prodEdit
        })
    }



    //CRUD
    // muon thay doi state nao thi viet ham setState tai vi tri state do
    createProduct = (newProduct) =>{
        console.log('newProduct',newProduct);
        let arrProductUpdate = this.state.arrProduct;
        arrProductUpdate.push(newProduct);

        //this.setState
        this.setState({
            arrProduct: arrProductUpdate
        })
    }
    delProduct = (idClick) =>{
        //xu ly mang => setState
        //console.log('idClick',idClick);
        let arrProductUpdate = this.state.arrProduct;
        //tim r9a vi tri cu9a id c9an xoa9
        // let indexDel = arrProductUpdate.findIndex(p => p.id === idClick);
        // if(indexDel !== -1){
        //     //tim thay indexDel => xoa
        //     arrProductUpdate.splice(indexDel,1);

        // }

        arrProductUpdate = arrProductUpdate.filter(p => p.id !== idClick);

        //setState cho arrProduct
        this.setState({
            arrProduct:arrProductUpdate
        })
    }

    render() {
        return (
            <div className='container'>
                <h3>ProductManagement</h3>
                <FormProduct productEdit={this.state.productEdit} createProduct={this.createProduct}/>
                <TableProduct arrProduct={this.state.arrProduct} delProduct={this.delProduct} editProduct={this.editProduct}/>
            </div>
        );
    }
}

export default ProductManagement;
