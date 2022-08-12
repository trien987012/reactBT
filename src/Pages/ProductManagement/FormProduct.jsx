import React, { Component } from 'react';

class FormProduct extends Component {
    state ={
        productInfo: {
            id:'',
            name:'',
            price:'',
            img:'',
            productType:'mobile',
            description:''
        },
        errors: {
            id:'',
            name:'',
            price:'',
            img:'',
            productType:'mobile',
            description:''
        }
    }

    handleChange = (e) =>{
        let {id, value} = e.target;
        let dataType = e.target.getAttribute('data-type');

        // this.setState({
        //     [id]:value
        // }, () =>{
        //     console.log(this.state);
        // });

        //xu ly product info
        let newValue = {...this.state.productInfo};
        newValue[id] = value;
        //xu ly loi
        let newErrors = {...this.state.errors};
        //check rong
        let errorMess = '';
        if(value.trim()===''){
            errorMess = id + ' khong duoc bo trong';
        }else{
            //loi dinh dang
            if(dataType === 'number'){
                let regexNumber = /^\d+$/;
                if(!regexNumber.test(value)){
                    errorMess = id + ' phai la so!'
                }
            }
        }
        newErrors[id] = errorMess;
        //setState
        this.setState({
            productInfo:newValue,
            errors:newErrors
        },()=>{
            console.log(this.state);
        })
    }

    handleSubmit = (e) => {
        e.preventDefault();
        //check truoc khi submit du lieu
        let valid = true;
        let {errors, productInfo} = this.state;
        //check error (tat ca error phai rong)
        for(let key in errors){
            if(errors[key] !== ''){
                valid = false;
                break;
            }
        }
        //check value (productInfo) tat ca value phai khac rong
        for(let key in productInfo){
            if(productInfo[key] === ''){
                errors[key] = key +' khong duoc bo trong';
                valid = false;
                // break;
            }
        }

        if(!valid){
            console.log(valid);
            this.setState({
                errors:errors
            });
            alert('du lieu khong hop le');
            return;
        }
        //hop le
        // alert('submitted');
        this.props.createProduct(productInfo);
    }
    
    render() {
        console.log(this.props.productEdit);
        let{id,name,productType,img,description,price} = this.props.productEdit;
        return (
            <form className='card' onSubmit={this.handleSubmit}>
                <div className='card-header bg-dark text-warning'>
                    Product info
                </div>
                <div className='card-body row'>
                    <div className='col-6'>
                        <div className='form-group'>
                            <p>Id</p>
                            <input value={id} className='form-control' id='id' name='id' onChange={this.handleChange}></input>
                            <p className='text-danger'>{this.state.errors.id}</p>
                        </div>
                        <div className='form-group'>
                            <p>name</p>
                            <input value={name} className='form-control' id='name' name='name'onChange={this.handleChange}></input>
                            <p className='text-danger'>{this.state.errors.name}</p>
                        </div>
                        <div className='form-group'>
                            <p>price</p>
                            <input value={price} data-type="number" className='form-control' id='price' name='price' type="text" onChange={this.handleChange}></input>
                            <p className='text-danger'>{this.state.errors.price}</p>
                        </div>
                    </div>
                    <div className='col-6'>
                        <div className='form-group'>
                            <p>Img Link</p>
                            <input value={img} className='form-control' id='img' name='img' onChange={this.handleChange}></input>
                            <p className='text-danger'>{this.state.errors.img}</p>
                        </div>
                        <div className='form-group'>
                            <p>Product type</p>
                            <select value={productType} className='form-control' id='productType' name='productType' onChange={this.handleChange}>
                                <option>mobile</option>
                                <option>tablet</option>
                                <option>laptop</option>
                            </select>
                        </div>
                        <div className='form-group'>
                            <p>product description</p>
                            <textarea value={description} className='form-control' id='description' name='description' rows={3} onChange={this.handleChange}></textarea>
                            <p className='text-danger'>{this.state.errors.description}</p>
                        </div>
                    </div>
                </div>
                <div className='card-footer'>
                    <button className='btn btn-success'>Create</button>
                    <button className='btn btn-primary'>Update</button>
                </div>
            </form>
        );
    }
}

export default FormProduct;
