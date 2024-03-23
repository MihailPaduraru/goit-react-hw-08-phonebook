import Alert from '@mui/material/Alert';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import {
  ContactForm,
  ContactList,
  Filter,
  Footer,
  Loader,
  Section,
} from '../../components';
import { fetchContacts } from '../../redux/contacts/operations';
import { getError, getIsLoading } from '../../redux/contacts/selectors';
import { Container, Main } from './Contacts.styled';

const Contacts = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(getIsLoading);
  const error = useSelector(getError);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <Container>
      {error && <Alert severity="error">{error}</Alert>}
      <Main>
        <Section title="Phonebook">
          <ContactForm />
        </Section>

        <Section title="Contacts">
          <Filter />
          {isLoading && <Loader />}
          <ContactList />
        </Section>
      </Main>
      <Footer />
    </Container>
  );
};

export default Contacts;
