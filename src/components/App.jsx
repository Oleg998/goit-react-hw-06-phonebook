

import PhoneForm from './MyPhone/PhoneForm/PhoneForm';

import PhoneList from './MyPhone/PhoneList/PhoneList';

import { useSelector, useDispatch } from 'react-redux';

import { addContact, deleteContact, setFilter } from '../redux/actions';

import {

  getFilterByContact,
} from '../redux/selectors';

export const App = () => {
  const contacts = useSelector(getFilterByContact);

  const dispatch = useDispatch();
  
  

  // useEffect(() => {
  //   if(!firstRender.current){
  //   localStorage.setItem('myPhoneBook', JSON.stringify(contacts))};
  // }, [contacts]);

  // useEffect(() =>{ (firstRender.current = false)}, []);

  // const [filter, setFilter] = useState('');

  const isDulecate = ({ name }) => {
    const normalazeName = name.toLowerCase();
    const dublicate = contacts.find(item => {
      const normalizedCurrentName = item.name.toLowerCase();
      return normalazeName === normalizedCurrentName;
    });
    return Boolean(dublicate);
  };

  const addForPhenebook = data => {
    if (isDulecate(data)) {
      return alert(`Name ${data.name} already in Phonebook`);
    }
    const action = addContact(data);
    dispatch(action);
  };

  const deleteName = id => {
    dispatch(deleteContact(id));
  };
  const handelSearce = ({ target }) => dispatch(setFilter(target.value));

  return (
    <div>
      <PhoneForm onSubmit={addForPhenebook} />

      <PhoneList
        items={contacts}
        deleteName={deleteName}
         handelSearce={handelSearce}
      />
    </div>
  );
};
