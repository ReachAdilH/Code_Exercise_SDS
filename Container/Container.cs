using System;
using System.Linq;

namespace DeveloperSample.Container
{
    public class Container
    {
        public void Bind(Type interfaceType, Type implementationType)
        {
            interfaceType = implementationType;
        }
        public T Get<T>()
        {
            Type type = typeof(T);
            var resp = System.Reflection.Assembly.GetExecutingAssembly()
        .GetTypes()
        .FirstOrDefault(type => typeof(T).IsAssignableFrom(type) && !type.IsInterface);
            return (T)Activator.CreateInstance(resp);
        }
    }
}