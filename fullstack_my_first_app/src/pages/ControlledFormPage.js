import React, { useState } from 'react';
export const ControlledFormPage = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    return (
        <form>
            <h3>Please enter your information:</h3>
            <div>
                <input
                    type="text"
                    placeholder="Name"
                    value={name}
                    onChange={(e) => setName(e.target.value)} />
            </div>
            <div>
                <input
                    type="text"
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)} />
            </div>
            <button onClick={(event) => {
                alert(`
                    Your name is ${name},
                    your email is ${email}
                `);
                event.preventDefault();
            }}>Submit</button>
        </form>
    );
}