const express = require('express')
const sqlite = require('sqlite3').verbose()
const parser = require('body-parser')
const db = new sqlite.Database('elec.db')
const app = express()
app.get('/',(req,res)=>res.send('Welcome Component Archive System Api'))


app.use('/v1/search',parser.urlencoded({extended:false}),(req,res)=>{
    var arg1 = req.url.split('/')[1]
    var arg2 = req.url.split('/')[2]
    //查询元件，按名称
    switch(arg1){
        case 'name':
            db.all('SELECT * FROM ELEC WHERE name=?',arg2,(err,row)=>{
                res.send(JSON.stringify(row))
                })
            break
        case 'uid':
            db.all('SELECT * FROM ELEC WHERE uid=?',arg2,(err,row)=>{
                res.send(JSON.stringify(row))
            }) 
            break               
        case 'footprint':
            db.all('SELECT * FROM ELEC WHERE footprint=?',arg2,(err,row)=>{
                res.send(JSON.stringify(row))
            })  
            break              
        case 'type':
            db.all('SELECT * FROM ELEC WHERE type=?',arg2,(err,row)=>{
                res.send(JSON.stringify(row))              
            })
            break
    }
})

app.use('/v1/insert',parser.json(),(req,res)=>{
    //console.log(JSON.parse(req.body))
    db.run('INSERT INTO ELEC (uid,name,footprint,type,amount,row,col) VALUES (?,?,?,?,?,?,?)',req.body.uid,req.body.name,req.body.footprint,req.body.type,req.body.amount,req.body.row,req.body.col,(err)=>{
        if(err){
            res.send(err)
        }else{
            res.send('successful')
        }
    })
})

app.use('/v1/delete',parser.urlencoded({extended:false}),(req,res)=>{
    var arg1 = req.url.split('/')[1]
    db.all('SELECT * FROM ELEC WHERE id=?',arg1,(err,row)=>{
        if(row.id == undefined){
            res.sendStatus(404)
        }else{
            db.run('DELETE FROM ELEC WHERE id=?',arg1,(err)=>{
                if(err){
                    res.send(err)
                }else{
                    res.send('id='+arg1+' has been deleted')
                }
            })
        }
    }) 
})



app.listen(3000,()=>console.log('System Started!'))