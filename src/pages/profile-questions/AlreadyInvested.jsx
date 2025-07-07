import SubTitle from "../../components/SubTitle";
import SmallHeading from "../../components/SmallHeading";
import Text from "../../components/Text";
import { useState } from "react";
import ShadowButton from "../../components/ShadowButton";

function AlreadyInvested({ invested, setInvested, setPage }) {
  const handleClick = (item) => {
    setInvested((prevState) => {
      const currentProducts = prevState.already_invested_financial_products;

      if (currentProducts.includes(item)) {
        // Remove product if already selected
        return {
          ...prevState,
          already_invested_financial_products: currentProducts.filter(
            (id) => id !== item
          ),
        };
      } else {
        // Add product if not selected
        return {
          ...prevState,
          already_invested_financial_products: [...currentProducts, item],
        };
      }
    });
  };
  return (
    <div className="sm:w-[90%] tab:w-[70%] laptop:w-3/5 m-auto">
      <SubTitle font={`font-clash`}>
        In which financial products have you already invested on a regular
        basis?
      </SubTitle>
      <Text extraClass={`pt-2`}>(Multiple options can be selected)</Text>
      <form className="mt-5 flex flex-col items-start gap-3">
        <div
          onClick={() => handleClick("shares")}
          className="flex items-center justify-normal gap-2 cursor-pointer"
        >
          <input
            type="checkbox"
            name="invested"
            className="accent-secondary2"
            checked={invested.already_invested_financial_products.includes(
              "shares"
            )}
          />
          <SmallHeading fontWeight={`font-normal`}>
            Shares (Equity)
          </SmallHeading>
        </div>
        <div
          onClick={() => handleClick("bonds")}
          className="flex items-center justify-normal gap-2 cursor-pointer"
        >
          <input
            type="checkbox"
            name="invested"
            className="accent-secondary2"
            checked={invested.already_invested_financial_products.includes(
              "bonds"
            )}
          />
          <SmallHeading fontWeight={`font-normal`}>
            Bonds (Debentures)
          </SmallHeading>
        </div>
        <div
          onClick={() => handleClick("investment-fund")}
          className="flex items-center justify-normal gap-2 cursor-pointer"
        >
          <input
            type="checkbox"
            name="invested"
            className="accent-secondary2"
            checked={invested.already_invested_financial_products.includes(
              "investment-fund"
            )}
          />
          <SmallHeading fontWeight={`font-normal`}>
            Collected investment funds
          </SmallHeading>
        </div>
        <div
          onClick={() => handleClick("sukuk")}
          className="flex items-center justify-normal gap-2 cursor-pointer"
        >
          <input
            type="checkbox"
            name="invested"
            className="accent-secondary2"
            checked={invested.already_invested_financial_products.includes(
              "sukuk"
            )}
          />
          <SmallHeading fontWeight={`font-normal`}>Sukuk</SmallHeading>
        </div>
        <div
          onClick={() => handleClick("derivatives")}
          className="flex items-center justify-normal gap-2 cursor-pointer"
        >
          <input
            type="checkbox"
            name="invested"
            className="accent-secondary2"
            checked={invested.already_invested_financial_products.includes(
              "derivatives"
            )}
          />
          <SmallHeading fontWeight={`font-normal`}>
            Derivatives (options, future)
          </SmallHeading>
        </div>
        <div
          onClick={() => handleClick("insurance")}
          className="flex items-center justify-normal gap-2 cursor-pointer"
        >
          <input
            type="checkbox"
            name="invested"
            className="accent-secondary2"
            checked={invested.already_invested_financial_products.includes(
              "insurance"
            )}
          />
          <SmallHeading fontWeight={`font-normal`}>
            Insurance investments
          </SmallHeading>
        </div>
        <div
          onClick={() => handleClick("commodities")}
          className="flex items-center justify-normal gap-2 cursor-pointer"
        >
          <input
            type="checkbox"
            name="invested"
            className="accent-secondary2"
            checked={invested.already_invested_financial_products.includes(
              "commodities"
            )}
          />
          <SmallHeading fontWeight={`font-normal`}>Commodities</SmallHeading>
        </div>
        <div
          onClick={() => handleClick("hedge-funds")}
          className="flex items-center justify-normal gap-2 cursor-pointer"
        >
          <input
            type="checkbox"
            name="invested"
            className="accent-secondary2"
            checked={invested.already_invested_financial_products.includes(
              "hedge-funds"
            )}
          />
          <SmallHeading fontWeight={`font-normal`}>Hedge funds</SmallHeading>
        </div>
        <div
          onClick={() => handleClick("others")}
          className="flex items-center justify-normal gap-2 cursor-pointer"
        >
          <input
            type="checkbox"
            name="invested"
            className="accent-secondary2"
            checked={invested.already_invested_financial_products.includes(
              "others"
            )}
          />
          <SmallHeading fontWeight={`font-normal`}>Others</SmallHeading>
        </div>

        <div className="mt-5 flex items-center justify-normal gap-5">
          <ShadowButton
            text={`Previous`}
            bg={`bg-gradient-to-b from-gray-200 to-gray-400 `}
            type={`button`}
            onClick={() => setPage(9)}
            rounded={`rounded-md`}
          />
          <ShadowButton
            text={`Submit`}
            bg={`bg-gradient-to-b from-orange-400 to-yellow-800 `}
            type={`submit`}
            rounded={`rounded-md`}
          />
        </div>
      </form>
    </div>
  );
}

export default AlreadyInvested;
