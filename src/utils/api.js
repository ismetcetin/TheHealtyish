import axios from 'axios';
import React from 'react'

export default function api() {
    
  return (
    <div>api</div>
  )
}

const BASE_URL = "https://api.edamam.com/api/recipes/v2?type=public"
const APP_ID_REC = "68e9bee2"
const APP_KEY_REC = "d2a79615fc3321f26d34bc6651006a46"

export const apiUtils = {
    getDefaultRecipes : () => axios.get (`${BASE_URL}&q=steak&app_id=${APP_ID_REC}&app_key=${APP_KEY_REC}`)
}