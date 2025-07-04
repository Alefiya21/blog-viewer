import { render, screen, fireEvent } from '@testing-library/react';
import PostDetail from '../components/PostDetail';
import React from 'react';

const post = { title: 'Detail Title', content: 'Detail Content' };

test('renders post detail content', () => {
  render(<PostDetail post={post} onClose={() => {}} />);
  expect(screen.getByText('Detail Title')).toBeInTheDocument();
  expect(screen.getByText('Detail Content')).toBeInTheDocument();
});

test('calls onClose when Close button is clicked', () => {
  const onClose = jest.fn();
  render(<PostDetail post={post} onClose={onClose} />);
  fireEvent.click(screen.getByText('Close'));
  expect(onClose).toHaveBeenCalled();
});