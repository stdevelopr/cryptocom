import React from 'react'
import { Admin, Resource, NumberField, NumberInput, EditGuesser, ImageInput, ReferenceInput, Labeled, FormDataConsumer, ImageField, SelectInput, List, Datagrid, Edit, Create, SimpleForm, DateField, TextField, EditButton, TextInput, DateInput } from 'react-admin';
import restProvider from "ra-data-simple-rest"
import axios from 'axios';
import config from 'react-global-configuration';

export const ProductList = props => {
    return <List {...props}>
    <Datagrid rowClick="edit">
        <TextField source="id" />
        <TextField source="title" />
        <TextField source="description" />
        <NumberField source="price" />
        <ImageEnv source="title" title="Image" />
    </Datagrid>
</List>
}
;

const ImageEnv = props => {
    props.record['env'] = `${config.get('storage') || ''}${props.record.img}`
    return (
        <ImageField source='env' title={props.title} />
    )
}
function formatLogo(value) {
    if (!value ||  typeof value === "string") { // Value is null or the url string from the backend, wrap it in an object so the form input can handle it 
     return { url: `${config.get('storage') || ''}${value}` };
    } else {  // Else a new image is selected which results in a value object already having a preview link under the url key
      return `${config.get('storage') || ''}${value}`;
    }
  }

export const ProductEdit = props => (
    <Edit {...props}>
        <SimpleForm>
            <TextInput disabled source="id" />
            <TextInput source="title" />
            <TextInput source="description" />
            <NumberInput source="price" />
            <ImageInput format={ formatLogo } source="img" label="Billede" accept="image/*" mulitple={false}>
                <ImageField source="url" title="title" />
            </ImageInput>
  
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

const dataProvider = restProvider('/api')
const myDataProvider = {
    ...dataProvider,
    create: (resource, params) => {
        if (resource !== 'products' || !params.data.img) {
            // fallback to the default implementation
            return dataProvider.create(resource, params);
        }

        let formData = new FormData()
        formData.append('file', params.data.img.rawFile);
        formData.append('data', JSON.stringify(params));
        const pet = {
            formData: formData,
            params: params
        }

        const config = {
            headers: {
                'Accept': 'application/json',
                'content-type': 'multipart/form-data'
            }
        }
        // return dataProvider.create(resource, params);
        return axios.post("api/products", formData, config)
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
