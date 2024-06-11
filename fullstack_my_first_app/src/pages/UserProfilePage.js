import React from 'react';
import { useState, useEffect } from 'react';
import axios from 'axios';

export const UserProfilePage = () => {
    const [user, setUser] = useState({ name: {} });
/*
    useEffect(() => {
        const fetchUser = async () => {
            const response = await fetch('https://randomuser.me/api/');
	@@ -13,6 +14,16 @@ export const UserProfilePage = () => {
        fetchUser();
    }, []);
*/
    useEffect(() => {
        const getUser = async () => {
            const response = await axios.get('https://randomuser.me/api/');
            console.log(response)
            setUser(response.data.results[0]);
        }
        getUser();
    }, []);


    return (
        <div>
            <h3>Name: {user.name.first} {user.name.last}</h3>
            <p>Email: {user.email}</p>
        </div>
    );
}