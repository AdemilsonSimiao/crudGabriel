import React, { useState } from "react";
import Axios from "axios";
import Dialog from "@material-ui/core/Dialog";
import { Button, DialogActions, DialogContent, DialogTitle, TextField } from "@material-ui/core";

export default function FormDialog(props){
    const [editValues, setEditValues] = useState({
        id: props.id,
        name: props.name,
        price: props.price,
        category: props.category,
    });
    const handleEditVinil = () => {
        Axios.put("http://localhost:3003/edit",{
            id: editValues.id,
            name: editValues.name,
            price: editValues.price,
            category: editValues.category,
        })
        handleClose();
    }
    const handleDelete = () => {
        Axios.delete(`http://localhost:3003/delete/${editValues.id}`)
        handleClose();
    }
    const handleClickOpen = () => {
        props.setOpen(true);
    };
    const handleClose = ()=>{
        props.setOpen(false);
    };
    const handleChangeValues = value =>{
        setEditValues(prevValues =>({
            ...prevValues, 
            [value.target.id]: value.target.value,
        }))
    }
    return (
        <Dialog
        open={props.open}
        onClose={handleClose}
        aria-labelLedby="form-dialog-title"
        >
            <DialogTitle id="form-dialog-title">Editar</DialogTitle>
            <DialogContent>
                <TextField
                autoFocus
                margin="dense"
                id="name"
                label="Nome do Vinil"
                defaultValue={props.name}
                onChange={handleChangeValues}
                type="text"
                fullWidth
                />
                <TextField
                autoFocus
                margin="dense"
                id="price"
                label="Preço"
                defaultValue={props.price}
                onChange={handleChangeValues}
                type="text"
                fullWidth
                />
                <TextField
                autoFocus
                margin="dense"
                id="category"
                label="Categoria"
                defaultValue={props.category}
                onChange={handleChangeValues}
                type="text"
                fullWidth
                />
            </DialogContent>
            <DialogActions>
                <Button onClick={handleClose} color="basic">Cancelar</Button>
                <Button onClick={handleDelete} color="warn">Excluir</Button>
                <Button onClick={handleEditVinil} color="primary">Salvar</Button>
            </DialogActions>
        </Dialog>
    )
}