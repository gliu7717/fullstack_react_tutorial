import React from 'react';
import { PeopleList } from '../components/PeopleList';
const people = [{
    name: 'John',
    age: 40,
}, {
    name: 'Joe',
    age: 25,
}, {
    name: 'Lee',
    age: 55,
}];

export const PeopleListPage = () => (
    <>
    <h1>The People List Page</h1>
    <PeopleList people={people} />
    </>
);