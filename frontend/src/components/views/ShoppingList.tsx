import ComingSoon from "../../pages/layout/ComingSoon";

//shopping list view
const ShoppingList = () => {
  const featureIsComing = true;
  return (
    <div>
      {featureIsComing ? (
        <ComingSoon comingSoonDate="20.10.2025" />
      ) : (
        <div>shopping list view</div>
      )}
    </div>
  );
};

export default ShoppingList;
