import { categories } from "@/mock/categories";
import { Tab, TabGroup, TabList, TabPanel, TabPanels } from "@headlessui/react";
import Item from "./item";

const ItemsList = () => {
  return (
    <div className="h-full">
      <TabGroup>
        <TabList>
          {categories.map((categorie) => (
            <Tab
              key={`categorie-${categorie.id}`}
              className="mb-4 rounded-full py-2 px-6 mr-4 focus:outline-none bg-white data-[selected]:bg-red-50 hover:bg-red-50 data-[selected]:text-red-600 data-[selected]:font-semibold"
            >
              {categorie.name}
            </Tab>
          ))}
        </TabList>
        <TabPanels>
          {categories.map(({ id, items }) => (
            <TabPanel
              key={`tabpanel-${id}`}
              className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-4"
            >
              {items.map((item) => (
                <Item item={item} key={`item-${id}-${item.id}`} />
              ))}
            </TabPanel>
          ))}
        </TabPanels>
      </TabGroup>
    </div>
  );
};

export default ItemsList;
