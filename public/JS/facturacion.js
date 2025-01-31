function mostrar()
{
    let item1=document.getElementById('prod1');//
    let item2=document.getElementById('prod2');//
    let item3=document.getElementById('prod3');//
    let adic=0;
//
    if(item1.selectedIndex==0)
    {
        document.getElementById('desc01').value="";
        document.getElementById('vau01').value=0;
        document.getElementById('cant01').value=0;
        document.getElementById('vat01').value=0;
    }

    if(item1.selectedIndex==1)
    {
        document.getElementById('desc01').value="Cualquier tipo de café + Almojábana ";
        document.getElementById('vau01').value=item1.options[item1.selectedIndex].value;
        document.getElementById('vat01').value=(parseFloat(document.getElementById('cant01').value)*parseFloat(document.getElementById('vau01').value) || 0).toFixed(0);

    }
    if(item1.selectedIndex==2)
    {
        document.getElementById('desc01').value="Chocolate frió o caliente + Masmellow + Pan rollo";
        document.getElementById('vau01').value=item1.options[item1.selectedIndex].value;
        document.getElementById('vat01').value=(parseFloat(document.getElementById('cant01').value)*parseFloat(document.getElementById('vau01').value)|| 0).toFixed(0);

    }
    if(item1.selectedIndex==3)
    {
        document.getElementById('desc01').value="Frapuchino + Mantecada";
        document.getElementById('vau01').value=item1.options[item1.selectedIndex].value;
        document.getElementById('vat01').value=(parseFloat(document.getElementById('cant01').value)*parseFloat(document.getElementById('vau01').value) || 0).toFixed(0);

    }

    //2do item de factura
    if(item2.selectedIndex==0){
        document.getElementById('desc02').value="";
        document.getElementById('vau02').value=0;
        document.getElementById('cant02').value=0;
        document.getElementById('vat02').value=0;
    }
    if(item2.selectedIndex==1)
    {
        document.getElementById('desc02').value="Cualquier tipo de café + Almojábana ";
        document.getElementById('vau02').value=item2.options[item2.selectedIndex].value;
        document.getElementById('vat02').value=(parseFloat(document.getElementById('cant02').value)*parseFloat(document.getElementById('vau02').value) || 0).toFixed(0);

    }
    if(item2.selectedIndex==2)
    {
        document.getElementById('desc02').value="Chocolate frió o caliente + Masmellow + Pan rollo";
        document.getElementById('vau02').value=item2.options[item2.selectedIndex].value;
        document.getElementById('vat02').value=(parseFloat(document.getElementById('cant02').value)*parseFloat(document.getElementById('vau02').value)|| 0).toFixed(0);

    }
    if(item2.selectedIndex==3)
    {
        document.getElementById('desc02').value="Frapuchino + Mantecada";
        document.getElementById('vau02').value=item2.options[item2.selectedIndex].value;
        document.getElementById('vat02').value=(parseFloat(document.getElementById('cant02').value)*parseFloat(document.getElementById('vau02').value) || 0).toFixed(0);

    }

    //3er. item de factura

    if(item3.selectedIndex==0){
        document.getElementById('desc03').value="";
        document.getElementById('vau03').value=0;
        document.getElementById('cant03').value=0;
        document.getElementById('vat03').value=0;
    }
    if(item3.selectedIndex==1)
    {
        document.getElementById('desc03').value="Cualquier tipo de café + Almojábana";
        document.getElementById('vau03').value=item3.options[item3.selectedIndex].value;
        document.getElementById('vat03').value=(parseFloat(document.getElementById('cant03').value)*parseFloat(document.getElementById('vau03').value) || 0).toFixed(0);

    }
    if(item3.selectedIndex==2)
    {
        document.getElementById('desc03').value="Chocolate frió o caliente + Masmellow + Pan rollo";
        document.getElementById('vau03').value=item3.options[item3.selectedIndex].value;
        document.getElementById('vat03').value=(parseFloat(document.getElementById('cant03').value)*parseFloat(document.getElementById('vau03').value)|| 0).toFixed(0);

    }
    if(item3.selectedIndex==3)
    {
        document.getElementById('desc03').value="Frapuchino + Mantecada";
        document.getElementById('vau03').value=item3.options[item3.selectedIndex].value;
        document.getElementById('vat03').value=(parseFloat(document.getElementById('cant03').value)*parseFloat(document.getElementById('vau03').value) || 0).toFixed(0);

    }

    // Calcular adicionales
    let totaldic0=0;
    if(document.getElementById('checkbox1').checked)
    {
        totaldic0 += 3500; //suma valor brownie
    }
    if(document.getElementById('checkbox2').checked)
    {
        totaldic0 += 2000; //suma valor fruta
    }
    if(document.getElementById('checkbox3').checked)
    {
        totaldic0 += 3300; //suma valor croissants
    }
    //Asignar el valor total
    document.getElementById('adic0').value = totaldic0;

    //calcular valor subtotal
    document.getElementById('subt').value=(parseFloat(document.getElementById('vat01').value)+parseFloat(document.getElementById('vat02').value)+parseFloat(document.getElementById('vat03').value)+parseFloat(document.getElementById('adic0').value)|| 0).toFixed(0);
    //calcular iva
    document.getElementById('iva').value=(parseFloat(document.getElementById('subt').value)*0.19 || 0).toFixed(0);
    //calcular descuento
    if(document.getElementById('radio1').checked)
    {
        document.getElementById('desc').value=(parseFloat(document.getElementById('subt').value)*0.10 || 0).toFixed(0);
    } else if(document.getElementById('radio2').checked)
    {
        document.getElementById('desc').value=(parseFloat(document.getElementById('subt').value)*0.00 || 0).toFixed(0);
    } else if (document.getElementById('radio3').checked)
    {
        document.getElementById('desc').value=(parseFloat(document.getElementById('subt').value)*0.00 || 0).toFixed(0);
    }
     //calcular neto
    document.getElementById('neto').value=(parseFloat(document.getElementById('subt').value)+parseFloat(document.getElementById('iva').value)-parseFloat(document.getElementById('desc').value)|| 0).toFixed(0);

    }
    function enviar(){
        swal("ESTIMADO CLIENTE","SU PEDIDO ESTA EN PROCESO... ESPERE AL LLAMADO DE SU TURNO... :3","success");
    }