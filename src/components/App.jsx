import PhoneForm from './MyPhone/PhoneForm/PhoneForm';

import PhoneList from './MyPhone/PhoneList/PhoneList';

import { useSelector, useDispatch } from 'react-redux';

import { addContact, deleteContact } from "../redux/contacts/contacts-slice"

import { setFilter } from "../redux/filter/filter-slice"

import { getFilterByContact } from '../redux/contacts/contacts-selectors';

export const App =  () => {
  const contacts = useSelector(getFilterByContact);

  const dispatch = useDispatch();

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
