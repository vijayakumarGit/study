/**
 * Created by Vk on 23/3/2017.
 */
export class FormatinService{
  public forName(name)
  {
    return name.display ? name.display : name.last ?
            name.first+name.last : name.first
  }
}
