import React from 'react';

import { LoadingComponent } from './styles';

const Loading: React.FC = () => {
  return (
      <LoadingComponent>
          <div className="lds-ring">
              <div>
                  </div>
                        <div>
                        </div>
                        <div>
                        </div>
                    <div>
                  </div>
              </div>
      </LoadingComponent>
  );
}

export default Loading;