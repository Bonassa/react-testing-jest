import { render, waitFor, waitForElementToBeRemoved } from '@testing-library/react';
import userEvent from '@testing-library/user-event'
import List from './index';

describe('App component', () => {
  // it e test são a mesma coisa, só que o it fica mais semântico para ler
  it('should render list items', () => {
    const { getByText } = render(<List initialItems={['Renan', 'Alana']} />)

    expect(getByText('Renan')).toBeInTheDocument()
    expect(getByText('Alana')).toBeInTheDocument()
  });

  it('should be able to add new item to the list', async () => {
    const user = userEvent.setup()
    const { getByText, getByPlaceholderText, findByText } = render(<List initialItems={[]} />);
    const addButton = getByText('Adicionar');
    const inputField = getByPlaceholderText('Novo item');

    await user.type(inputField, 'Novo');
    await user.click(addButton);
    
    expect(await findByText('Novo')).toBeInTheDocument();
  });

  it('should be able to remove a item from the list', async () => {
    const user = userEvent.setup();
    const { queryByText, getAllByText } = render(<List initialItems={['Renan']} />);
    const removeButtons = getAllByText('Remover');

    await user.click(removeButtons[0]);

    // await waitForElementToBeRemoved(() => {
    //   return getByText('Renan')
    // })
    await waitFor(() => {
      expect(queryByText('Renan')).not.toBeInTheDocument()
    })
  })
})