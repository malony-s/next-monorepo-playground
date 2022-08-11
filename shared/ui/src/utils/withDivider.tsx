import React, { PropsWithChildren } from 'react';

export type WithDivider = { divider?: JSX.Element };

const withDivider =
  <T extends WithDivider>(Component: React.FC<T>) =>
  ({ divider, children, ...others }: PropsWithChildren<T>) => {
    const count = React.Children.count(children);
    const Dividers = divider
      ? new Array(count - 1).fill('').map(() => React.cloneElement(divider))
      : [];
    const childrenArray = React.Children.toArray(children);
    Dividers.forEach((v, i) => {
      childrenArray.splice(
        i * 2 + 1,
        0,
        React.cloneElement(v, {
          key: v.type + 'divider' + i,
        }),
      );
    });

    return React.createElement(Component, {
      ...others,
      children: <>{childrenArray}</>,
    } as PropsWithChildren<T>);
  };

export default withDivider;
