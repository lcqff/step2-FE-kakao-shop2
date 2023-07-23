import { ProductOptionData } from '@api/dto';
import comma from '@utils/commaUtils';
import React, { useState } from 'react';
import TextButton from './button/TextButton';

interface OptionListProps {
  options: ProductOptionData[];
  onClick: (option: ProductOptionData) => void;
}

const OptionList = ({ options, onClick }: OptionListProps) => {
  const [isOptionOn, setIsOptionOn] = useState(false);
  const onSelectorClick = () => {
    setIsOptionOn(!isOptionOn);
  };

  return (
    <TextButton onClick={onSelectorClick}>
      <div className="w-[500px] text-left rounded-lg overflow-hidden my-3">
        <div className="p-3 text-gray-500 font-bold shadow-innerFlat">옵션</div>
        {isOptionOn &&
          options.map((option: ProductOptionData, index: number) => {
            return (
              <div className="text-left p-3 shadow-convexWhite">
                <TextButton onClick={() => onClick(option)}>
                  <div>
                    {index + 1}.{option.optionName}
                  </div>
                  <div className="text-left m-1 font-bold">{comma(option.price)}원</div>
                </TextButton>
              </div>
            );
          })}
      </div>
    </TextButton>
  );
};

export default OptionList;
