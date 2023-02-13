import {useEffect ,useContext} from 'react'
import WeatherContext from '../context/weatherContext'
import {Formik,Form,Field} from "formik"

function Search() {
  const {search , setSearch} = useContext(WeatherContext);
  return (
    <div className='searchContainer center'>
        <div className='center searchArea'>
          <Formik 
          initialValues={{search: ''}}
          onSubmit={values => {
            setSearch(values.search.toLowerCase());
          }}
          >
          {({values}) => (
            <Form>
              <Field id = "searchInput" name ="search" className='searchInput center' placeholder='Search other city...'/>
            </Form>
          )}
          </Formik>
        </div>
    </div>
  )
}

export default Search