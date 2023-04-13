
# Periodic Table Rest API

This is a RESTful API that provides information about the elements of the periodic table.


## Installation

Install  with npm

```bash
git clone https://github.com/gaonkarBhai/PeriodicTable-RestAPI.git
cd PeriodicTable-RestAPI
npm i
```
    
## Authentication
This API does not require any authentication.
## Run Locally
```bash
npm start
```
or
```bash
npm run dev
```
This will start the server on port 3000.You can access the API endpoints using a web browser or Postman or Thunder Client.
## Demo

Request `localhost:3000/elements`

Responce
```json
[
  {
    "_id": "643822aa7ad5191f8d03e17b",
    "atomicNumber": 1,
    "symbol": "H",
    "name": "Hydrogen",
    "atomicMass": 1.008,
    "electronegativity": 2.2,
    "meltingPoint": -259.14,
    "boilingPoint": -252.87,
    "density": 0.0899,
    "groupBlock": "nonmetal",
    "yearDiscovered": 1766,
    "__v": 0
  },
  ...
  
]
```
## Contribution
If you want to contribute to this project, please fork the repository and create a pull request with your changes.
