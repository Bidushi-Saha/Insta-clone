import { useEffect, useState } from 'react';
import './postview.css';

import Header from './Header';
import Post from './Post';
import Form from './Form.jsx';
import axios from 'axios';
import Loading from './Loading';

const apiURL = "http://localhost:3001/Postview";
const Postview = () => {
    let [data, setdata] = useState([])
    let [postAdded, setPostAdded] = useState(0);
    let [isForm, setForm] = useState(false);
    let [isLoading, setLoading] = useState(false);
    useEffect(() => {
        async function fetchData() {
            setLoading(true)
            await axios.get(apiURL)
                .then((data) => setdata(data.data.posts))
                .catch(e => console.log(e))
                .finally(() => setLoading(false));

        }
        fetchData();
    }, [postAdded])

    return (
        <div className="App">
            <Header setForm={ setForm } />
            
            { isForm ? <Form setForm={ setForm } postAdded={ setPostAdded } /> : isLoading ? <Loading /> : <Post data={ data } /> }
            
        </div>
    );
}

export default Postview;