// import {useState}  from 'react';

const MasterDetail = props =>{

    return <div onClick={e=>{
        props.onClick(e.target.getAttribute('name'));
    }}>{props.children}</div>
    
}
const Item = props => {

    return <>
        <h2  name={`${props.name}`}>{props.children}</h2>
    </>
}

const Detail = props => {
    return <div onClick={e=>{e.stopPropagation()}}> {props.payload? props.render(props.payload): <></>}</div>;
}

MasterDetail.Item = Item;
MasterDetail.Detail = Detail;
export default MasterDetail;