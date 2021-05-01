import React from 'react'
import { Admin, Resource, NumberField, NumberInput, EditGuesser, ImageInput, ReferenceInput, ImageField, SelectInput, List, Datagrid, Edit, Create, SimpleForm, DateField, TextField, EditButton, TextInput, DateInput } from 'react-admin';
import restProvider from "ra-data-simple-rest"
import axios from 'axios';

export const ProductList = props => (
    <List {...props}>
        <Datagrid rowClick="edit">
            <TextField source="id" />
            <TextField source="title" />
            <TextField source="description" />
            <NumberField source="price" />
            <ImageField source="img" title="Image" />
        </Datagrid>
    </List>
);

export const ProductEdit = props => (
    <Edit {...props}>
        <SimpleForm>
            <TextInput disabled source="id" />
            <TextInput source="title" />
            <TextInput source="description" />
            <NumberInput source="price" />
        </SimpleForm>
    </Edit>
);

export const ProductCreate = props => (
    <Create {...props}>
        <SimpleForm>
            <TextInput disabled source="id" />
            <TextInput source="title" />
            <TextInput source="description" />
            <NumberInput source="price" />
            <ImageInput source="img" label="Related pictures" accept="image/*">
            <ImageField source="src" title="title" />

            </ImageInput>
        </SimpleForm>
    </Create>
);

const dataProvider = restProvider('http://localhost:3000')
const myDataProvider = {
    ...dataProvider,
    create: (resource, params) => {
        console.log("OOOOOPPPPPPPPP", params)
        if (resource !== 'products' || !params.data.img) {
            console.log("HEreeee")
            // fallback to the default implementation
            // return dataProvider.create(resource, params);
        }
        /**
         * For posts update only, convert uploaded image in base 64 and attach it to
         * the `picture` sent property, with `src` and `title` attributes.
         */
        
        // Freshly dropped pictures are File objects and must be converted to base64 strings
        // const newPictures = params.data.pictures.filter(
        //     p => p.rawFile instanceof File
        // );
        // const formerPictures = params.data.pictures.filter(
        //     p => !(p.rawFile instanceof File)
        // );
        let formData = new FormData()
        formData.append('file', params.data.img.rawFile);
        return axios.post("http://localhost:3000/test", formData)
        // return dataProvider.create(resource, {
        //     ...params,
        //     data:{
        //         ...params.data,
        //         img: formData
        //     }
        // })
        // return Promise.all(params.data.pictures.rawFile.map(convertFileToBase64))
        //     .then(base64Pictures =>
        //         base64Pictures.map(picture64 => ({
        //             src: picture64,
        //             title: `${params.data.title}`,
        //         }))
        //     )
        //     .then(transformedNewPictures =>
        //         dataProvider.create(resource, {
        //             ...params,
        //             data: {
        //                 ...params.data,
        //                 pictures: [
        //                     ...transformedNewPictures,
        //                     // ...formerPictures,
        //                 ],
        //             },
        //         })
        //     );
    },
};

/**
 * Convert a `File` object returned by the upload input into a base 64 string.
 * That's not the most optimized way to store images in production, but it's
 * enough to illustrate the idea of data provider decoration.
 */
const convertFileToBase64 = file =>
    new Promise((resolve, reject) => {
        console.log("FILLEEE", file)
        const reader = new FileReader();
        reader.onload = () => resolve(reader.result);
        reader.onerror = reject;

        reader.readAsDataURL(file.rawFile);
    });


export default function AdminPage() {
    return <Admin dataProvider={myDataProvider}>
        <Resource name='products' list={ProductList} edit={ProductEdit} create={ProductCreate}></Resource>
    </Admin>
}
