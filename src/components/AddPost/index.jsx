import React from 'react'
import s from './style.module.css'

export default function AddPost() {
  return (
    <form className={s.wrapper}>
        <div>
            <div>
                <input type="text" name='title'/>
                <input type="number" name='id'/>
            </div>
            
            <textarea name="descr" cols="30" rows="10"></textarea>
        </div>
        <button>Add Post</button>
    </form>
  )
}
