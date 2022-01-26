/**
 * @jest-environment jsdom
 */

import "@testing-library/jest-dom/extend-expect";
import React from 'react';
import {CopyField, DefaultCopyField} from './copy-field';
import {render} from '@testing-library/react';

test('should render', () => {
  const {container} = render(
    <CopyField value={"Copy text"} label={"Click on clipboard"} />
  );
  expect(container).toBeDefined();
});


test('should render default', () => {
  const {container} = render(
    <DefaultCopyField value={"Copy text"} label={"Click on clipboard"} />
  );
  expect(container).toBeDefined();
});
