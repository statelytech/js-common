

export class CollectionUtil
{
    public static add(originalList:any[], item:any):void
    {
        // console.log("original", originalList);
        // console.log("item", item);

        if(!item)
        {
            return;
        }

        let itemFound = false;
        let counter:number = 0;
        let foundIndex:number = 0;

        // if(originalList.indexOf(item) != -1)
        // {
        //     let index = originalList.indexOf(item);
        //     originalList[index] = item;
        //     return ;
        // }

        // if(!item.id)
        // {
        //     originalList.push(item);
        //     return;
        // }

        originalList.forEach((element)=>{
            if(element.id == item.id)
            {
                // console.log("item found");
                itemFound = true;
                foundIndex = counter;
            }
            else
            {
                counter++;
            }
        });

        // console.log("item found", itemFound);

        if(itemFound)
        {
            // console.log("foundIndex --- ", foundIndex);
            originalList[foundIndex] = item;
        }
        else
        {
            // originalList.push(item);
            originalList.unshift(item);
        }

        // console.log("final list .. ", originalList);
    }

    public static remove(originalList:any[], id:string):void
    {
        if(id == null)
        {
            return;
        }

        let counter:number = 0;

        originalList.forEach((element)=>{
            if(element.id == id)
            {
                originalList.splice(counter,1);
                return;
            }
            counter++;
        });

    }

    public static findById(originalList:any[], id:string)
    {
        // console.log("original", originalList);
        console.log("checking for id", id);

        if(id == null)
        {
            return null;
        }

        let counter:number = 0;

        // @ts-ignore
        let found = originalList.find(element => element.id == id);

        // originalList.forEach((element)=>{
        //     console.log(`comparing -- ${element.id} and ${id}`);
        //     if(element.id == id)
        //     {
        //         // originalList.splice(counter,1);
        //         return element;

        //     }

        //     counter++;

        // });

        return found;
    }
}
