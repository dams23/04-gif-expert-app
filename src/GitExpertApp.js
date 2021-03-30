import React, { useState } from 'react';
import AddCategory from './components/AddCategory';
import { GifGrid } from './components/GifGrid';
const GifExpertApp = () => {
    const [categories, setCategories] = useState(['Star Wars']);
    //const handleAdd = () => {
    //    setCategories([...categories,'Harry Potter'])
    //    setCategories(cats => [...categories, 'Harry Potter'])
    //}
    return (
        <>
            <h2>GifExpertApp</h2>
            <AddCategory setCategories={setCategories} />
            <hr></hr>
            <ol>
                {
                    categories.map(category => (
                        <GifGrid
                            key={category}
                            category={category}
                        />
                    ))
                }
            </ol>
        </>
    )
};
export default GifExpertApp;