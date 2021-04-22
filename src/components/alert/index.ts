// import React, { Component, ComponentType, ReactNode } from 'react';

// interface WithBadgeProps {
//   bottom?: number;
//   left?: number;
//   right?: number;
//   top?: number;
//   hidden?: boolean;
// }

// function withBadge(
//   options: WithBadgeProps = {}
// ): <P extends object>(
//     WrappedComponent: ComponentType<P>
//   ) => ComponentType<P> {
//   return <P extends object>(WrappedComponent: ComponentType<P>) =>
//     class BadgedComponent extends Component<P> {
//       public render() {
//         const {  ...badgeProps } = options;
        
//         return (
//             <WrappedComponent
//               { ...badgeProps }
//             />
//           )
//       }
//     };
// }


// export default withBadge;